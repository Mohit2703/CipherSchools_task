import React from "react";
import './CipherMap.css'

const CipherMap = () => {
    const year = [
        [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ], [
            [0, 0, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1], [2, 1, 1, 1, 2, 3, 1]
        ]
    ]

    const m = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const st = 4;

    const mons = [];

    for (let i = 0; i < 12; i++) {
        mons.push(m[(st + i) % 12]);
    }

    console.log(mons);

    const monMap = mons.map((mon) => {
        return (
            <div className="thonm">
                {mon}
            </div>
        )
    })

    const yearMap = year.map((month) => {
        return (
            <div className="month">
                {month.map((week) => {
                    return (<div>
                        <div className="week">
                            {week.map((day) => {
                                return <div className={"day + day" + day}></div>
                            })}
                        </div>
                    </div>)
                })}
            </div>
        )
    })
    return (
        <div className="mapCipher">
            <div className="cipherMon">
                {monMap}
            </div>
            <div className="CipherMap">
                <div className="weeks">
                    <div className="w"></div>
                    <div className="w">Mon</div>
                    <div className="w"></div>
                    <div className="w">Wed</div>
                    <div className="w"></div>
                    <div className="w">Fri</div>
                    <div className="w"></div>
                </div>
                <div className="year">
                    {yearMap}
                </div>
            </div>
        </div>
    )
}

export default CipherMap;