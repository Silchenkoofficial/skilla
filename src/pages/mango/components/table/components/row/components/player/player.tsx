import { FC, memo, useLayoutEffect, useRef, useState } from 'react';
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
import { useStore } from '@/hooks';

interface IProps {
  duration: number;
  recordId: string;
  partnershipId: string;
  isShow: boolean;
}

export const Player: FC<IProps> = memo(
  ({ duration, recordId, partnershipId, isShow }) => {
    const { getRecord } = useStore();
    const controlRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [record, setRecord] = useState<any>();

    const handlePlay = () => {
      if (!record) {
        getRecord(recordId, partnershipId).then(console.log);
      }
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
