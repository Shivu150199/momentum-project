import React from 'react'
import { git, logo, menu, profile, time,layer } from '../assets'

const Sidebar = () => {
  return (
    <aside className="bg-[#363636] flex flex-col justify-between p-4 h-full flex-[.030]">
    <div className="flex flex-col gap-4">
        <img src={logo} alt="img" className="w-8 h-8" />
        <div className="flex flex-col gap-4">
            <button>
                <img src={menu} alt="img" className="w-8 h-8" />
            </button>
            <button>
                <img src={time} alt="img" className="w-8 h-8" />
            </button>
            <button>
                <img src={layer} alt="img" className="w-8 h-8" />
            </button>
            <button>
                <img src={git} alt="img" className="w-8 h-8" />
            </button>
        </div>
    </div>
    <button>
        <img src={profile} alt="" />
    </button>
</aside>
  )
}

export default Sidebar
