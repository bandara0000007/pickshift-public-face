export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="34" height="26" viewBox="0 0 38 28" aria-hidden="true">
        <circle cx="5" cy="4.5" r="3" fill="rgba(255,255,255,.3)" />
        <circle cx="15" cy="4.5" r="3" fill="rgba(255,255,255,.3)" />
        <circle cx="25" cy="4.5" r="3" fill="rgba(255,255,255,.3)" />
        <circle cx="35" cy="4.5" r="3" fill="rgba(255,255,255,.3)" />
        <circle cx="5" cy="14" r="3" fill="rgba(255,255,255,.7)" />
        <circle cx="15" cy="14" r="3" fill="#00C2D1" />
        <circle cx="25" cy="14" r="3" fill="#FEE202" />
        <circle cx="35" cy="14" r="3" fill="rgba(255,255,255,.7)" />
        <circle cx="5" cy="23.5" r="3" fill="#00C2D1" />
        <circle cx="15" cy="23.5" r="3" fill="#FEE202" />
        <circle cx="25" cy="23.5" r="3" fill="rgba(255,255,255,.7)" />
        <circle cx="35" cy="23.5" r="3" fill="rgba(255,255,255,.3)" />
      </svg>
      <span className="font-poppins text-[22px] font-bold tracking-[-0.5px]">
        <span className="text-[#CACACA]">PICK</span>
        <span className="text-cyan">SHIFT</span>
      </span>
    </div>
  );
}
