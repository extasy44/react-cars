import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { TopSection } from './topSection';
import { BookingSteps } from './bookingSteps';

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <Marginer direction="vertical" margin="2em" />
      <TopSection />
      <Marginer direction="vertical" margin="5em" />
      <BookCard />
      <Marginer direction="vertical" margin="5em" />
      <BookingSteps />
    </PageContainer>
  );
}
