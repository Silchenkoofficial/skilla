import { FC, memo, useRef, useState } from 'react';
import { useStore } from '@/hooks';
import { formatTimeFromSeconds } from '@/utils';
import {
  Control,
  ControlWrapper,
  IconWrapper,
  Track,
  Wrapper,
} from './player.styled';
import DownloadIcon from '@/assets/icons/download.svg?react';
import PlayIcon from '@/assets/icons/play.svg?react';
import PauseIcon from '@/assets/icons/pause.svg?react';
import CrossIcon from '@/assets/icons/cross.svg?react';

interface IProps {
  duration: number;
  recordId: string;
  partnershipId: string;
  isShow: boolean;
}

/**
 * К сожалению, появились трудности с получение записи с сервера. Через Postman все ок, через браузер ни в какую
 * не хочет возвращаться. Кидает 405 ошибку, что метод POST не разрешен и необходимо использовать OPTIONS.
 * Поэтому реализован только визуал.
 */
export const Player: FC<IProps> = memo(
  ({ duration, recordId, partnershipId, isShow }) => {
    const { getRecord } = useStore();
    const controlRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [record, setRecord] = useState<any>();

    const handlePlay = () => {
      if (!record) {
        getRecord(recordId, partnershipId).then(setRecord);
      }

      setIsPlaying(prevState => !prevState);
    };

    return (
      <Wrapper isCollapse={!isShow}>
        <span>{formatTimeFromSeconds(duration)}</span>
        <ControlWrapper
          style={{
            width: isShow ? '352px' : '0',
          }}
        >
          <Control ref={controlRef} isShow={isShow}>
            <IconWrapper onClick={handlePlay}>
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </IconWrapper>
            <Track />
            <IconWrapper>
              <DownloadIcon />
            </IconWrapper>
            <IconWrapper>
              <CrossIcon />
            </IconWrapper>
          </Control>
        </ControlWrapper>
      </Wrapper>
    );
  }
);
