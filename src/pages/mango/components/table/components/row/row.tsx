import { FC, useMemo, useState } from 'react';
import { formatPhoneNumber, getRandomValue, getTime } from '@/utils';
import { Player } from './components';
import { Cell, TableRow } from '../../table.styled';
import { ArrowIcon } from './row.styled';
import noavatar from '@/assets/icons/noavatar.svg';
import Arrow from '@/assets/icons/arrow.svg?react';
import { Status } from './components/status';
import { StatusType } from './components/status/status.styled';

interface IProps {
  callData: any;
}

export const Row: FC<IProps> = ({ callData }) => {
  const [isShowPlayer, setIsShowPlayer] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const randomRate = useMemo(
    () => getRandomValue(['Отлично', 'Хорошо', 'Плохо']),
    []
  );

  const handleMouseEnter = () => {
    if (!!timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      setIsShowPlayer(true);
    }, 300);
    setTimer(newTimer);
  };

  const handleMouseLeave = () => {
    setIsShowPlayer(false);

    if (!!timer) {
      clearTimeout(timer);
    }
  };

  return (
    <TableRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Cell>
        <ArrowIcon
          in_out={!!callData.in_out}
          red={callData.status === 'Не дозвонился'}
        >
          <Arrow />
        </ArrowIcon>
      </Cell>
      <Cell>
        <div>{getTime(callData.date)}</div>
      </Cell>
      <Cell>
        <img
          src={
            callData.person_avatar.includes('noavatar.jpg')
              ? noavatar
              : callData.person_avatar
          }
          width={32}
          height={32}
          alt="avatar"
        />
      </Cell>
      <Cell>
        <div>{formatPhoneNumber(callData.partner_data.phone)}</div>
      </Cell>
      <Cell>{callData.source}</Cell>
      <Cell red={!!callData.errors?.[0]}>
        {callData.errors?.[0] ?? (
          <Status type={(randomRate as StatusType) || 'Отлично'}>
            {randomRate}
          </Status>
        )}
      </Cell>
      <Cell>
        {!!callData.record && (
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Player
              duration={callData.time}
              recordId={callData.record}
              partnershipId={callData.partnership_id}
              isShow={isShowPlayer}
            />
          </div>
        )}
      </Cell>
    </TableRow>
  );
};
