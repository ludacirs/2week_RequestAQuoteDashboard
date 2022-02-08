import * as S from './Style';
import { useEffect, useState } from 'react';
import { Card, EmptyBox, Header, Toggle } from '@components/base';
import { Dropdowns } from '@components/domain';
import { ICardData } from '@models/CardData';
import useAxios from '@hooks/useAxios';
import { filterCard } from '@utils/functions';

export type objectTypes = {
  [key: string]: boolean;
};

const Home = () => {
  const data = useAxios<ICardData[]>('http://localhost:3001/requests');
  const [methodList, setMethodList] = useState<objectTypes>({
    선반: false,
    밀링: false,
  });
  const [materialList, setMaterialList] = useState<objectTypes>({
    알루미늄: false,
    탄소강: false,
    구리: false,
    합금강: false,
    강철: false,
  });

  const filteredCard = data && filterCard(data, methodList, materialList);

  return (
    <S.HomeWrapper>
      <Header />
      <S.Title>
        <h1>들어온 요청</h1>
        <div>파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
      </S.Title>
      <S.FilterTab>
        <Dropdowns
          methodList={methodList}
          materialList={materialList}
          setMethodList={setMethodList}
          setMaterialList={setMaterialList}
        />
        <Toggle children={'상담 중인 요청만 보기'} />
      </S.FilterTab>
      {filteredCard && (
        <S.CardsContainer>
          {filteredCard.map((cardInfo) => (
            <Card
              key={cardInfo.id}
              width={366}
              height={356}
              requests={cardInfo}
            />
          ))}
        </S.CardsContainer>
      )}
      {!filteredCard?.length && <EmptyBox />}
    </S.HomeWrapper>
  );
};

export default Home;
