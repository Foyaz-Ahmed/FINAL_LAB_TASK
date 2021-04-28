import {React,useState} from 'react'
import {Link} from 'react-router-dom'

const Create = ({diaries,setDiaries,url}) => {

    const [newDiary,setnewDiary] = useState({
        'id':'',
        'event':'',
        'experience':'',
        'thought':'',
        'last_modification':'',
    });

    const changeInfo = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        let diary={...newDiary,[name] : value};
        setnewDiary(diary);
        
    }

 
    const addDiary = async(diary)=>{
        const res = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(diary),
        })
        const data = await res.json()
        setDiaries([...diaries,data]);
    }



    const onsubmit =(e)=>{
        e.preventDefault();
         const id = Math.floor(Math.random()*10000)+1;

        

        const newObj ={
            'id':id,
            'event':newDiary.event,
            'experience':newDiary.experience,
            'thought':newDiary.thought,
            'last_modification':newDiary.last_modification,
        }
        addDiary(newObj)
        alert('add Complete');
    }

    return (
        <div>
            <form action="" onSubmit={onsubmit}>
            <div>
                    <label htmlFor="">Event</label>
                    <input type="text" name='event' onChange={changeInfo}/>
                </div>
                <br/><br/>

                <div>
                    <label htmlFor="">Experience</label>
                    <input type="text" name='experience' onChange={changeInfo}/>
                </div>
                <div>
                    <label htmlFor="">Thought</label>
                    <input type="text" name='thought' onChange={changeInfo}/>
                </div>
                <div>
                    <label htmlFor="">Last Modification</label>
                    <input type="date" name='last_modification' onChange={changeInfo}/>
                </div>
                <br/><br/>

                <input type="submit" value='Submit'/>
            </form>
            <br/><br/>
            <Link to='/diarylist'>Diary List</Link>
            <br/><br/>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Create