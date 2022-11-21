import { SearchContainer } from "./style";
import {useState} from "react"

export default function Timer_section(){

    const [days,setDays] = useState('')
    const [hours,setHours] = useState('')
    const [minutes,setMinutes] = useState('')
    const [seconds,setSeconds] = useState('')
    
    var x = setInterval(function() {
    var countDownDate = new Date('Dec 25, 2022 00:00:00').getTime()
    var now = new Date().getTime()
    var distance = countDownDate - now

    var days = String(Math.floor(distance / (1000 * 60 * 60 * 24)))
    var hours =  String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    var minutes =  String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    var seconds =  String(Math.floor((distance % (1000 * 60)) / 1000))

    if (days.toString().length == 1){
        days = '0' + days
    }

    if (hours.toString().length == 1){
        hours = '0' + hours
    }

    if (minutes.toString().length == 1){
        minutes = '0' + minutes
    }

    if (seconds.toString().length == 1){
        seconds ='0' + seconds
    }

    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)

    },1000)

    return(

        <SearchContainer>

                    <img id="papai" width='400px' height='261px' loading="lazy" src="/papai-noel.png" alt="papai noel" />

                    <main>

                        <h2>Natal está chegando!</h2>
                        <h3>Compre para quem</h3>

                        <section>
                            <p><span className='number'>{days}</span> <br/> Dias</p>
                            
                            <p><span className='number'>{hours}</span> <br/> Horas</p>
                            <p><span className='number'>{minutes}</span> <br/> Minutos</p>
                            
                            <p><span className='number'>{seconds}</span> <br/> Segundos</p>
                        </section>
                    </main>

                    
        </SearchContainer>
    )
}