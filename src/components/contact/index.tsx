import Input from "../input";
import { Container } from "./style";

import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

interface formContact {
  email: string;
  name: string;
  subject: string;
  text: string;
}

export default function Contact() {
  const [formContact, setFormContact] = useState<formContact>();

  return (
    <Container>
      <section id="formdiv">
        <form id="form" onSubmit={() => {}}>
          <fieldset>
            <legend>
              {" "}
              Entrar <span className="tracovermelho"></span>{" "}
            </legend>
            <Input
              id="nome"
              name="nome"
              label="Nome"
              type="text"
              value="Jose Maria"
            />

            <Input
              id="email"
              name="email"
              label="Insira seu e-mail"
              type="email"
              value="admin@mail.com"
            />
            <Input
              id="subject"
              name="subject"
              label="Assunto"
              type="text"
              value="Assunto"
            />
            <textarea id="texto"></textarea>

            <button type="submit" id="sendForm">
              Enviar mensagem
            </button>
          </fieldset>
        </form>
      </section>
    </Container>
  );
}
