import React from 'react';
import Btn from "../elements/ButtonStyled";
import Icon from "../elements/Icon"


const btnCodeTxt = ["<Button />", 
"&:hover, &:focus",
"<Button variant=”outline” />",
"<Button variant=”text” />",
"<Button disableShadow />",
"<Button disabled />",
"<Button variant=”text” disabled />",
"<Button startIcon=”local_grocery_store” />",
"<Button endIcon=”local_grocery_store” />",
"<Button size=”sm” />",
"<Button size=”md” />",
"<Button size=”lg” />",
"<Button color=”default” />",
"<Button color=”primary” />",
"<Button color=”secondary” />",
"<Button color=”danger” />"
]

const Buttons = (props) => {

    return (
        <div className="btns__section flex-col">
            <h1 className="page__title">Buttons</h1>
                    <div className="default__section flex-row">
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[0]}</p>
                            <Btn default lg>Default</Btn>
                        </div>
                    </div>
                    <div className="default__section flex-row">
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[2]}</p>
                            <Btn primary lg outline>Default</Btn>
                        </div>
                    </div>
                    <div className="default__section flex-row">
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[3]}</p>
                            <Btn primary lg text>Default</Btn>
                        </div>
                    </div>
                    <div className="default__section flex-row">
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[4]}</p>
                            <Btn primary lg disableShadow>Default</Btn>
                        </div>
                    </div>
                    <div className="default__section flex-row">
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[5]}</p>
                            <Btn primary lg disabled>Default</Btn>
                        </div>
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[6]}</p>
                            <Btn default lg textdisabled>Default</Btn>
                        </div>
                    </div>
                    <div className="default__section flex-row">
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[7]}</p>
                            <Btn primary lg><Icon start/>Default</Btn>
                        </div>
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[8]}</p>
                            <Btn primary lg>Default<Icon end/></Btn>
                        </div>
                    </div>
                    <div className="default__section flex-row">
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[9]}</p>
                            <Btn primary sm>Default</Btn>
                        </div>
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[10]}</p>
                            <Btn primary md>Default</Btn>
                        </div>
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[11]}</p>
                            <Btn primary lg>Default</Btn>
                        </div>
                    </div>
                    <div className="default__section flex-row">
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[12]}</p>
                            <Btn default lg>Default</Btn>
                        </div>
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[13]}</p>
                            <Btn primary lg>Default</Btn>
                        </div>
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[14]}</p>
                            <Btn secondary lg>Default</Btn>
                        </div>
                        <div className="card__btn flex-col">
                            <p className="btn__title">{btnCodeTxt[15]}</p>
                            <Btn danger lg>Default</Btn>
                        </div>
                    </div>
            <footer className="page__footer">created by <u><b>Jose Alves</b></u> - devChallenges.io</footer>    
        </div>
    )
}

export default Buttons;