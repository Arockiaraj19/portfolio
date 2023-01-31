

export const HeaderComponent= () => {
  return (
    <div className="w-full flex justify-between">
<div>
    Icon
</div>
<div>
<ul className="flex justify-end child:px-3 child:ml-4 child:text-xs child:font-medium child:cursor-pointer child:overflow-hidden

child:relative 
child:after:content-'' child:after:absolute child:after:top-0 child:after:right-0 child:after:w-full child:after:h-full child:after:bg-secondary child:after:translate-x--full child:after:animate-after 
child:after:content-'' child:before:absolute child:before:top-0 child:before:right-0 child:before:w-full child:before:h-full child:before:bg-primary child:before:translate-x-0 child:before:animate-before">
    <li className="hover:font-semibold">Home</li>
    <li className="hover:font-semibold">About</li>
    <li className="hover:font-semibold">Work</li>
    <li className="hover:font-semibold">Contact</li>
</ul>
</div>
    </div>
  )
}
