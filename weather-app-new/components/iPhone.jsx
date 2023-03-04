// import WeatherApp from "@/components/WeatherApp/WeatherApp";

export default function iPhone() {
  return (
    <div className="center">
      <div className="mobile | bg-white h-[580px] w-[276px] border-solid border-2 box-border rounded-[30px] shadow-[inset_0_0_8px_rgba(0,0,0,0.3)] | relative">
        <div className="screen | bg-white h-[455px] w-[256px] border-solid border-[1px] mt-24 mx-auto | relative"></div>
        <div
          className="inner | bg-black h-1 w-10 box-border rounded-sm | absolute top-8 left-2/4 -translate-x-2/4 |
        before:content-[''] before:bg-black before:h-2 before:w-2 before:rounded-[50%] | before:absolute before:top-[-2px] before:left-[-22px] | 
        after:content-[''] after:bg-black after:h-1.5 after:w-1.5 after:rounded-[50%] | after:absolute after:top-[-2px] after:left-[-22px]"
        ></div>
        <ul className="volume">
          <li></li>
          <li></li>
        </ul>
        <ul className="silent">
          <li></li>
        </ul>
        <ul className="sleep">
          <li></li>
        </ul>
        <div className="home | bg-white h-10 w-10 border-solid border-2 border-slate-50 box-border rounded-[50%] shadow-[inset_0_0_7px_rgba(0,0,0,0.1)] | absolute bottom-3.5 left-2/4	-translate-x-2/4"></div>
      </div>
    </div>
  );
}
