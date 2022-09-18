import dogs from './assets/dogs.png'
export default function Hero() {
    return (
        <>
            <div className="heroContainer">
                <div className="containerWraper">
                    <nav className="navBar">
                        <div className="nav-brand">
                            <h2>Pawclub</h2>
                        </div>
                        <ul>
                            <li className="input"><input className="navInput" type="text" /><i class="fa-solid fa-magnifying-glass"></i></li>
                            <li><div className="userId"><i class="fa-regular fa-user"></i></div></li>
                        </ul>
                    </nav>
                    <div className="mainComponent">
                        <div className="mainCompo-contain">
                            <div className="minComppoText">
                                <h1>Paw <br />
                                    Club
                                </h1>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                                <div className="getBtn">Get Started</div>
                            </div>
                            <div className="mainCompoImg">
                                <img src={dogs}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}