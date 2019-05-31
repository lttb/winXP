/** @jsx jsx */

import React from 'react'
import css, {jsx} from '@reshadow/react'
import randomcolor from 'randomcolor'

import Error from './apps/ErrorBox'

const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const DeadErrors = () => {
    const {innerHeight, innerWidth} = window

    const [count, setCount] = React.useState(0)
    const onClick = () => setCount(count + 5)

    return css`
        container {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1;

            & > button {
                position: absolute;
                right: 0;
                z-index: 1000;
            }

            & > Error {
                height: auto;
                width: 380px;
                position: absolute;
            }
        }
    `(
        <container>
            <button onClick={onClick}>fail</button>
            {[...Array(count)].map(() => {
                const color = randomcolor()
                const x = randomRange(0, innerWidth)
                const y = randomRange(0, innerHeight)

                return (
                    <Error color={color} message="CRITICAL ERROR" style={{
                        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                    }} />
                )
            })}

        </container>
    )
}

export default DeadErrors