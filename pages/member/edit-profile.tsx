import Image from "next/image";
import { useEffect ,useState } from "react";
import Input from "../../components/atoms/Input";
import Sidebar from "../../components/organisms/Sidebar";
import Cookies from 'js-cookie'
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import jwtDecode from "jwt-decode";
import { updateProfile } from "../../services/member";
import toast from 'react-toastify'
import { useRouter } from "next/router";

interface UserStateTypes {
    id: string,
    name:string,
    email: string,
    avatar: any
}

export default function EditProfile() {
    const [user, setUser] = useState<UserStateTypes>({
        id: '',
        name:'',
        email: '',
        avatar: ''
    })
    const [imagePrev, setImagePrev] = useState(null)
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token')
        if (token) {
            const jwtToken = atob(token);
            const payload: JWTPayloadTypes = jwtDecode(jwtToken);
            const userFromPayload: UserTypes = payload.player;
            setUser(userFromPayload);
        }
    }, [])

    const onSubmit = async () => {
        console.log('data', user);
        const data = new FormData();

        data.append('image', user.avatar);
        data.append('name', user.name);

        const response = await updateProfile(data, user.id);

        if (response.error) {
            toast.error(response.message)
        }else{
            console.log('data : ', response);
            Cookies.remove('token')
            router.push('/sign-in')
        }
        
    }
    return (
        <section className="edit-profile overflow-auto">
        <Sidebar activeMenu="settings"/>
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                    <form action="">
                        <div className="photo d-flex">
                            <div className="image-upload">
                                <label for="avatar">
                                {imagePrev ?  (<img src={imagePrev} className="img-upload" alt="logo"/>) :   <Image src='/icon/upload.svg' width={120} height={120} alt="logo"/>}

                                {/* <Image src='/icon/upload.svg' alt="icon upload" width={90} height={90}/> */}

                                </label>
                                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg"
                                 onChange={(event) => {
                                    const img = event.target.files![0];
                                    setImagePrev(URL.createObjectURL(img))
                                    return setUser({
                                        ...user,
                                        avatar: img
                                    })
                                    
                                }} />
                            </div>
                        </div>

                        <div className="pt-30">
                            <Input label="Full Name" value={user.name} onChange={(event) => setUser({
                                ...user,
                                name: event.target.value
                            })} />
                        </div>
                        <div className="pt-30">
                            <Input label="Email" value={user.email} disabled />
                        </div>
                        {/* <div className="pt-30">
                            <Input label="Phone" />
                        </div> */}
                        <div className="button-group d-flex flex-column pt-50">
                            <button type="button" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                onClick={onSubmit}>Save My Profile</button>
                        </div>
                    </form>

                </div>


            </div>
        </main>
    </section>
    )
}
