import React, {Component} from "react";
import Gondola from "../../dist/imgs/gondola.mp4";
import anime from  "../../dist/imgs/anime.jpeg";
import mister from "../../dist/imgs/mister.png";
import ryuko from "../../dist/imgs/ryuko_css.jpg";
import img5 from "../../dist/imgs/5.jpeg";
import img2 from "../../dist/imgs/2.jpeg";
import well from "../../dist/imgs/Well.png";
import guy from "../../dist/imgs/Garcon.png";

class Article extends Component{
    constructor(props){
        super(props)
        this.state = {
            activeTab: true,
            comments: [{
                comment: "It's an okay guy.",
                author: "Anonymous",
                date: new Date().toLocaleString()
            }]
        }
    }

    render(){
        return(
            <div className="article">
                    <header className="headerArticle">
                    <div className="confus">
                        <div className="categoriesTop">
                            <span className="in">in: </span>
                            <div className="categoriesList">
                                <a>Characters</a>
                                , &nbsp;
                                <a>Tech Savvy</a>
                                , &nbsp;
                                <a>Web Devs</a>
                            </div>
                        </div>
                        <div className="articleTitle">
                                <span>Martin</span>
                            </div>
                    </div>
                    <div className="options">
                            <a className="comments" href="#comments">comments</a>
                            <a className="share" href="https://twitter.com/share?url=https://github.com/Mec4no&amp;text=Martin%20Ortega%20is%20looking%20for%20a%20job%20in%20web%20development!%20Help%20him%20by%20spreading%20the%20word!" target="_blank">share</a>
                        </div>
                </header>
                <hr></hr>
                <video className="video" controls><source src={Gondola} type="video/mp4"></source></video>
                <table className="card">
                    <tbody>
                        <tr className="name"><th>Martin (Martin)</th></tr>
                        <tr><td>
                            <div className="animeManga">
                                {
                                    (() => {
                                        if(this.state.activeTab){
                                            return( 
                                                <div>
                                                    <ul className="tabber">
                                                    <li className="tabActive">Anime</li><wbr></wbr>
                                                    <li className="tabInactive" onClick={()=>{
                                                        this.setState({activeTab:false});
                                                    }}>Manga</li><wbr></wbr>
                                                    </ul>
                                                    <div className="photo">
                                                    <img className="mister" src={anime}></img>
                                                    </div>
                                                </div>
                                            )
                                        }else{
                                            return(
                                                <div>
                                                    <ul className="tabber">
                                                    <li className="tabInactive" onClick={()=>{
                                                        this.setState({activeTab:true});
                                                    }}>Anime</li><wbr></wbr>
                                                    <li className="tabActive">Manga</li><wbr></wbr>
                                                    </ul>
                                                    <div className="photo">
                                                    <img className="mister" src={mister} alt="lol"></img>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })() 
                                }
                            </div>    
                        </td></tr>
                        <tr className="name"><th>Description</th></tr>
                        <tr className="dataSpace">
                            <th className="dataName">Name: </th>
                            <td className="data">Angel Martin Ortega Yung</td>
                        </tr>
                        <tr className="dataSpace">
                            <th className="dataName">Age: </th>
                            <td className="data">As old as I can remember</td>
                        </tr>
                        <tr className="dataSpace">
                            <th className="dataName">Tecnologies: </th>
                            <td className="data">JS, React, MongoDB, NodeJS, Python, C#, Java, Webpack</td>
                        </tr>
                        <tr className="dataSpace">
                            <th className="dataName">Experience: </th>
                            <td className="data">Some university projects, a pair of gamejams, one personal project</td>
                        </tr>
                        <tr className="dataSpace">
                            <th className="dataName">Alliance: </th>
                            <td className="data">Universidad del Valle de Guatemala</td>
                        </tr>
                        <tr className="dataSpace">
                            <th className="dataName">First Appearance: </th>
                            <td className="data">30 of october of 1999, Escuintla; Episode 0</td>
                        </tr>
                        <tr className="dataSpace">
                            <th className="dataName">Affiliated: </th>
                            <td className="data">Ricardo Valenzuela (mentor)<br></br> Dennis (teacher)<br></br> Gerardo Pineda (mentor)</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <b>Martin</b> is a young and excentric computer science student who aspires to become a web developer. He is currently studying in Universidad del Valle de Guatemala; however, he does much of his learning on web development by himself, especially in vacations, where there is no extra classes to bog down his learning. His preferred methods of learning are books and Youtube video tutorial series.
                </p>
                <p>
                    He has many other interests apart from web development, such as writing and game development. His passion for inventing stories and giving life to characters has driven him to write two books, however, he has had no luck in publishing said works. He knows he has much to learn and that life is long, so there is no rush. This passion for storytelling extends to his passion for games and game development, having participated in two gamejams and done some personal projects. However, he recognizes the huge amounts of time that these two hobbies consume, so he tries to focus on sharpening his web development skills.
                </p>
                <p>
                    Despite what it may seem, he is really hard working on things that he proposes himself to do well. He takes his time and aspires for perfectionism, which sometimes bites him in the butt. However, it can be assured that he works hard on when motivated.
                </p>
                <h2><span className="section">Personality</span></h2>
                <p>
                    Most of the time he will put up a tranquil personality, yet he mixes it up with some pranks and sarcasm to maintain things interesting. He is known to be kind of a jokester and a hypeman. He, however, is not that much of a peoples person. While it is not difficult to start new friendships and talk to other people, being in a place full of unknown people scares him sometimes, yet he almost always manages to come out with some friends and new connections. He likes making people laugh and genuinely cares about his friends. He also loves to hang out with friends, something he misses in the days of the quarantine. 
                </p>
                <h2><span className="section">Technologies</span></h2>
                <p>
                    His is most familiarized with the MERN stack. His has spent more time practicing React and Node.js than other language he has ever engaged with, only followed by C#. MongoDB is his preferred database system manager. Much of his tenure with C# is in game development, where he uses Unity even for 2D games, saying that it gives him an excuse to learn every single aspect of the development process.
                </p>
                <figure className="ryuko_css">
                    <img src={ryuko} alt="css_work" className="css_work"></img>
                    <figcaption><a href="https://t.co/ZcxSXczkQl?amp=1" className="figText">Link to the codepen of this work.</a></figcaption>
                </figure>
                <h2><span className="section">Trivia</span></h2>
                <ul id="trivia">
                    <li>His very first interaction with programming was in an Arduino course in Intecap.</li>
                    <li>He despises math courses and sometimes thinks that they take too much time away from practicing stuff from programming courses.</li>
                    <li>Language learning is one his fascinations and he wants to finish learning French, as it is his first language that he himself tried to learn. Second would be Japanese, as Japanese culture fascinates him.</li>
                    <li>Esports are a hobby of his and he very much likes MOBAS such as Dota 2 and arena shooters such as Team Fortress 2 and Quake Live.</li> 
                    <li>He is currently looking for a job.</li>
                </ul>
                <h2><span className="section">Image Gallery</span></h2>
                <div className="gallery">
                    <figure className="galleryPhoto">
                        <img src={img5} alt="5.jpeg" className="galleryPhotograph"></img>
                        <figcaption className="figText">Global Game Jam 2020, in UVG.</figcaption>
                    </figure>
                    <figure className="galleryPhoto">
                        <img src={img2} alt="photo" className="galleryPhotograph"></img>
                        <figcaption className="figText">Global Game Jam 2020, in UVG.</figcaption>
                    </figure>
                    <figure className="galleryPhoto">
                        <img src={well} alt="photo" className="galleryPhotograph"></img>
                        <figcaption className="figText" >Sprites for personal projects.</figcaption>
                    </figure>
                    <figure className="galleryPhoto">
                        <img src={guy} alt="photo" className="galleryPhotograph"></img>
                        <figcaption className="figText">Another sprite.</figcaption>
                    </figure>
                </div>
                <table id="extraThingy">
                    <tbody id="tableBody">
                        <tr id="extraThingyLabel">
                        <th id="column">
                            <i>Job Seeker</i> characters
                        </th>
                        </tr>
                        <tr id="extraThingyCharacters">
                            <th className="mainCharacters">Main characters</th>
                            <td className="charactersInTable">Martin</td>
                        </tr>
                    </tbody>
                </table>
                <p></p>
                <h2 className="commentsHeader">Comments</h2>
                <hr></hr>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(e.target.commentArea.value);
                    let comms = this.state.comments;
                        let newComm = {
                            comment: e.target.commentArea.value,
                            author: "Anonymous",
                            date: new Date().toLocaleString()
                        }
                        comms.push(newComm);
                        this.setState({comments: comms});
                        e.target.commentArea.value = "";                        
                }}>
                    <textarea className="commentArea" id="commentArea" placeholder="Write your thoughts on this web developer..."></textarea>
                    <button>Comment!</button>
                </form>
                <div className="commentSection" id="comments">
                    {this.state.comments.map((comm, index) => {
                        return(    
                            <div key={index} className="comment">
                                <p className="message">{comm.comment}</p>
                                <p className="author">~ {comm.author}</p>
                                <p className="date">{comm.date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Article;