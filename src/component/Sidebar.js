import React from 'react'
import { git, logo, menu, profile, time,layer } from '../assets'

const Sidebar = () => {
  return (
    <aside className="bg-[#363636] flex flex-col justify-between p-4 h-full flex-[.0180]">
    <div className="flex flex-col gap-6 items-center">
        <img src={logo} alt="img" className="w-[26px] h-[19px]" />
        <div className="flex flex-col gap-6 items-center">
            <button>
                <img src={menu} alt="img" className="w-[26px] h-[19px]" />
            </button>
            <button>
                <img src={time} alt="img" className="w-[26px] h-[19px]" />
            </button>
            <button>
                <img src={layer} alt="img" className="w-[26px] h-[19px]" />
            </button>
            <button>
                <img src={git} alt="img" className="w-[26px] h-[19px]" />
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
