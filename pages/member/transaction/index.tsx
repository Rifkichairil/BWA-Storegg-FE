import jwtDecode from "jwt-decode";
import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";

export default function Transactions() {
    return (
        <section className="transactions overflow-auto">
        <Sidebar activeMenu="transaction" />
        <TransactionContent />
    </section>
    )
}

interface GetServerSideProps {
    req: {
        cookies: {
            token: string
        };
    }
}

export async function getServerSideProps ({req} :GetServerSideProps){
    // Cek Cookies
    const { token } = req.cookies ;
    if (!token) {
        return {
            redirect: {
                destination: '/sign-in',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}
