import React, {useState,useEffect} from "react"
const people=[
    {
        id:1,
        img:"photo/user.png",
        name:"Kavya Patil",
        title:"Patient",
        quota:" One of the best caring unit in Bengaluru. They are equipped with the best technology and well-known medical practitioners. Before treatment I heard lots of positive news about them."
    },
    {
        id:2,
        img:"photo/user.png",
        name:"Raj Sena",
        title:"Patient",
        quota:"Awesome Hospitality, clean hygienic environment, very cooperative and good behavior, staffs are so friendly with patients."
    },
    {
        id:3,
        img:"photo/user.png",
        name:"Rubica Noi",
        title:"Patient",
        quota:" Very nice and good Clinic for all types of diagnostic tests, pathology tests, x-ray, CT Scan, USG, EEG, ECG and consulting to Doctors of Neurology, Orthopaedic, Medicine and others."
    },
]
const Sliderp=()=>{
   
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex=people.length-1;
        if(index < 0){
            setIndex(index);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    },[index, people]);

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index+1);
        },5000);
        return ()=>{
            clearInterval(slider);
        }
    }, [index])
    return (<div>
        <section>
            <div>
                <h2>top interval</h2>
            </div>
            <div>
                {people.map((item,indexPeole)=>{
                    const {id, img, name, title, quota}= item;
                    let position="nextSlide";
                    if(indexPeole === index)
                    {
                        position="activeSlide"
                    }
                    if(indexPeole === index-1 || (index === 0 && indexPeole === people.length-1))
                    {
                        position="lastSlider"
                    }
                    return(
                        <article className={position} key={id}>
                            <img sec={img} alt={name}/>
                            <h4>{name}</h4>
                            <p>{title}</p>
                            <p>{quota}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    </div>
    )
}
export default Sliderp