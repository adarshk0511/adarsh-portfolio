export function Tech({icon, name}) {
  return (

<div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition">

<img src={icon} className="w-7 h-7"/>

<span className="text-lg text-gray-300">
{name}
</span>

</div>

  )
}