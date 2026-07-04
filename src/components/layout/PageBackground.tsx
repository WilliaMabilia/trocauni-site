export function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[#fbfaff]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfaff_0%,#f7f7ff_32%,#fff8fb_68%,#fbfaff_100%)]" />

      <div className="absolute left-[-14rem] top-[-10rem] h-[36rem] w-[36rem] rounded-full bg-[#6177ff]/14 blur-[115px]" />

      <div className="absolute right-[-13rem] top-[3rem] h-[34rem] w-[34rem] rounded-full bg-[#d84cdf]/12 blur-[120px]" />

      <div className="absolute left-[24%] top-[38rem] h-[28rem] w-[28rem] rounded-full bg-[#3aa7ff]/8 blur-[125px]" />

      <div className="absolute right-[4%] top-[74rem] h-[36rem] w-[36rem] rounded-full bg-[#ff6b8f]/10 blur-[130px]" />

      <div className="absolute left-[-12rem] top-[118rem] h-[34rem] w-[34rem] rounded-full bg-[#845cff]/10 blur-[125px]" />

      <div className="absolute bottom-[-14rem] right-[15%] h-[36rem] w-[36rem] rounded-full bg-[#ff8a3d]/8 blur-[130px]" />

      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,88,180,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(100,88,180,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(112,87,255,0.13) 1px, transparent 1.5px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(circle at 50% 42%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 42%, black, transparent 70%)",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white/60 to-transparent" />
    </div>
  );
}
