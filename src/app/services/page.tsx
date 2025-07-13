import React from 'react'

const services = [
    {
        id: 1,
        name: 'pentesting',
        desc: 'desc of pentesting'
    },
    {
        id: 1,
        name: 'Forensic',
        desc: 'desc of pentesting'
    },
    {
        id: 1,
        name: 'hacking',
        desc: 'desc of pentesting'
    }
]

const ServicesPage = () => {
    return (<>
        <div>ServicesPage</div>
        {services.map((item, index) => {
            return (<div>
                <h1>
                    {item.name}
                </h1>
                <div>
                    {item.desc}
                </div>

            </div>)
        })}
    </>
    )
}

export default ServicesPage