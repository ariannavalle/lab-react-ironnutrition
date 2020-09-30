import React from 'react'

export default function Button({children}) {
    return (
        <div>
            <button className="button is-info">{children}</button>
        </div>
    )
}
