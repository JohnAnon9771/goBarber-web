import React, { useState, useMemo } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { addDays, subDays, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDate() {
    setDate(subDays(date, 1));
  }

  function handleNextDate() {
    setDate(addDays(date, 1));
  }
  return (
    <Container>
      <header>
        <button type="button" onClick={() => handlePrevDate()}>
          <MdChevronLeft size={32} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={() => handleNextDate()}>
          <MdChevronRight size={32} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>João Alves</span>
        </Time>
        <Time available>
          <strong>08:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>08:00</strong>
          <span>João Alves</span>
        </Time>
        <Time>
          <strong>08:00</strong>
          <span>João Alves</span>
        </Time>
      </ul>
    </Container>
  );
}
