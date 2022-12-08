import { useEffect } from 'react'
import { Container } from './styles';

export default function ActiveCampaignForm() {
    const script = document.createElement('script');

    useEffect(()=>{
        script.src = 'https://haniaboultaif.activehosted.com/f/embed.php?id=1';
        script.async = true;
        document.body.appendChild(script);
    },[])

    return(
      <Container className="_form_1" ></Container>
    )
  }