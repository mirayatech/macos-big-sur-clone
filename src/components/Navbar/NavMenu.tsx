import React, { useState, useRef, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { MenuItemType } from "../../library/types";
import { Dropdown, DropdownContainer, MenuItem, Divider } from "./Style";
import { useThemeStore } from "../../library/useThemeStore";

type NavMenuProps = { item: MenuItemType };

export function NavMenu({ item }: NavMenuProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { themeColor } = useThemeStore();
  const handleToggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={menuRef}>
      <MenuItem onClick={handleToggleDropdown}>
        {item.label === "icon" ? (
          <FaApple />
        ) : item.label === "Finder" ? (
          <strong>{item.label}</strong>
        ) : (
          item.label
        )}
      </MenuItem>

      {isDropdownVisible && (
        <Dropdown $themeColor={themeColor}>
          {item.children?.map((child, index) => (
            <React.Fragment key={index}>
              {child === null ? (
                <Divider $themeColor={themeColor} />
              ) : (
                <span>{child}</span>
              )}
            </React.Fragment>
          ))}
        </Dropdown>
      )}
    </DropdownContainer>
  );
}
