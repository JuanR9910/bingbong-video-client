import React from 'react'
import {useState, useEffect} from 'react';

export default function Sidebar() {
    const [sidebar, setSideBar] = useState ([
    ])
    return (
        <div>
            {['Home', 'Settings', 'Videos', 'Filter']}
            {/* ^this will contain a pulled array of the submitted tag/category from the video schema */}
        </div>
    )
}
