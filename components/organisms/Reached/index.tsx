import React from 'react'
import Gap from './Gap'
import List from './List'

export default function Reached() {
    return (
        <section className="reached pt-50 pb-50">
        <div className="container-fluid">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                <List title='290M+' info='Players Top Up'  />
                <Gap />
                <List title='12.500' info='Games Available' active />
                <Gap />
                <List title='99,9%' info='Happy Players' active />
                <Gap />
                <List title='4.7' info='Rating Worldwide' active />
            </div>
        </div>
    </section>
    )
}
