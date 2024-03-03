"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import style from "./style.module.scss";
import useScollHeader from "@/utils/useScollHeader";
import { screenText } from "@/constants/screenTexts";
import { HEADER_NAVIGATION } from "@/constants/headerNavigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { MenuMobileSlice } from "@/redux/slice/menuMobile";

export const FixedNavigator = () => {
  const { isOpen } = useSelector((state: RootState) => state.menuMobile);
  const { clientWindowHeight } = useScollHeader();
  const dispatcher = useDispatch();
  const hideMenu = () => {
    dispatcher(MenuMobileSlice.actions.hideMenu());
  };
  const showMenu = () => {
    dispatcher(MenuMobileSlice.actions.showMenu());
  };
  return (
    <header className={`${style.headerContainer} bg-primary`}>
      <div
        className={` bg-primary ${style.header} ${
          clientWindowHeight > 10 ? style.isSticky : style.isNormal
        }`}
      >
        <div className={`${style.content}`}>
          <nav className={style.logo}>
            <Link scroll={false} href="/">
              {screenText.title}
            </Link>
          </nav>
          <nav className={`${style.desktopOptions}`}>
            {HEADER_NAVIGATION.map((item, index) => {
              return (
                <div key={JSON.stringify(item)} className={`${style.option}`}>
                  <Link scroll={false} href={item.path}>
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>
          <div className={style.menuBtn}>
            <div className={style.expandBtn} onClick={showMenu}>
              <IconMenu2 />
            </div>
          </div>
        </div>
        <div
          className={`text-primary ${style.menuMobile} ${
            isOpen ? style.show : style.hide
          }`}
        >
          <div className={style.logoContainerMobile}>
            <nav className={`text-primary`} onClick={hideMenu}>
              <Link scroll={false} href="/">
                {screenText.title}
              </Link>
            </nav>
            <div onClick={hideMenu} className={style.close}>
              <IconX />
            </div>
          </div>
          <nav className={`${style.menuMobileOptions}`}>
            {HEADER_NAVIGATION.map((item, index) => {
              return (
                <div
                  key={JSON.stringify(item)}
                  className={`${style.option}`}
                  onClick={hideMenu}
                >
                  <Link scroll={false} href={item.path}>
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>
          <p className={style.version}>{"0.0.1"}</p>
        </div>
      </div>
    </header>
  );
};
