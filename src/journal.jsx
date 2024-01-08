import Data from './data'
export default function App(){
    const item=Data.map((temp)=>{
        return <ListCard key={temp.key}
        {...temp}
        />;
    }
    )
    
    return(
        <div className='app'>
            <div className='min-a'>
                 <Navbar/>
                {item}
             </div>
        </div>

    )
}
function Navbar(){
    return(
        <>
        <div className='nav-box'>
            <img className='nav-img' src='../public/Fill 213.png'/>
            <p>my travel journal.</p>
        </div>
        </>
    )
}
function ListCard(props){
    return(
        <div className='card-list'>
            <img className='card-img' src={`../public/${props.img}`}   />
            <div className='sub-card'>
                    <img className='card-pin' src='../public/Fill 219.png' />
                    <h4 className="card-loc" >{props.location}</h4>
                     <a className='glink' href=''>view on google map</a>
                  <h2 className='title' >{props.title}</h2>
                  <p className='card-date'>{props.date}</p>
                    <p className='card-txt'>{props.text}</p>
            </div>
        </div>

    )
}