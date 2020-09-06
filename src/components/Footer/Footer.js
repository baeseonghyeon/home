import React from "react"
import "./Footer.scss"

import { FiSun } from "react-icons/fi"
import { FiMoon } from "react-icons/fi"

function Footer(props) {
    const langs = props.langs

    return (
        <div className="footer">
            <div className="mb-1">
                <span className="dark-toggle-box">
                    <span
                        className={
                            props.darkState === "inactive"
                                ? "dark-toggle dark-active"
                                : "dark-toggle"
                        }
                        onClick={() => props.darkModeToggle(false)}
                    >
                        <FiSun size="18" />
                        {/* Day */}
                    </span>
                    <span
                        className={
                            props.darkState === "active"
                                ? "dark-toggle dark-active"
                                : "dark-toggle"
                        }
                        onClick={() => props.darkModeToggle(true)}
                    >
                        <FiMoon size="18" />
                        {/* Night */}
                    </span>
                </span>
                <span className="dividing-line">|</span>
                {langs.map((lang, index) => {
                    return (
                        <span className="lang-toggle-box" key={index}>
                            <span
                                className={
                                    lang.set === "KR"
                                        ? "lang-toggle active"
                                        : "lang-toggle"
                                }
                                onClick={() => props.langToggle("KR")}
                            >
                                KR
                            </span>
                            <span
                                className={
                                    lang.set === "EN"
                                        ? "lang-toggle active"
                                        : "lang-toggle"
                                }
                                onClick={() => props.langToggle("EN")}
                            >
                                EN
                            </span>
                        </span>
                    )
                })}
            </div>
            <div>
                ©
                <a
                    href="https://analytics.google.com/analytics/web/?authuser=1#/report-home/a174985234w242601509p226122997"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                </a>
                Bae Seonghyeon (github.io)
            </div>
        </div>
    )
}
export default React.memo(Footer)
