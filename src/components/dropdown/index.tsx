import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Slide } from "react-awesome-reveal";

interface dropdownProps{
    title: string,
    items: 
        {
            name:string,
            path: string
        }[]
}

export function Dropdown({title,items}:dropdownProps) {

    const [open, setOpen] = useState(false)
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    
    function Buttonhandler(){
        if(open){
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    function closeMenu(){
        setOpen(false)
    }

    function useOutsideAlerter(ref:MutableRefObject<any>) {
        useEffect(() => {
          
            //Check if clicked on outside of element
            
            function handleClickOutside(event:Event) {
                    if (ref.current && !ref.current.contains(event.target)) {
                        setOpen(false);
                    }
                }

            // Bind the event listener

            document.addEventListener("mousedown", handleClickOutside);

            return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            };

        }, [ref]);
    }
    

  return (
    <Container ref={wrapperRef}>

        <button onClick={ () => Buttonhandler()}>
            {title} 
            <FiChevronDown id="downarrow"/>
        </button>

        {open && 

            <Slide cascade duration={300} direction='up'>
                <ul className='list'>
                    
                    {items.map(item => {
                        return(
                            <Link onClick={closeMenu} to={item.path}>{item.name}</Link>
                        )
                    })}

                </ul>
            </Slide>
        }
    </Container>
  );
}
