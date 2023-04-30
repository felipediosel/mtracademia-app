import {useEffect} from 'react';
import {useTheme} from 'styled-components/native';
import {TextSmall} from '../../../../components/Texts/TextSmall';
import {useAppSelector} from '../../../../redux/hooks/useAppSelector';
import {useAppDispatch} from '../../../../redux/hooks/useAppDispatch';
import {
  initialState,
  selectVersion,
  setLastSync,
} from '../../../../redux/features/version';
import * as Firestore from '../../../../services/firebase/firestore';
import {formatDate} from '../../../../services/firebase/firestore/utils/date';

export const LastSync: React.FC = () => {
  const theme = useTheme();
  const {lastsync} = useAppSelector(selectVersion);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = Firestore.Collections.Versao.onSnapshotLast(data => {
      const lastSync = data ? formatDate(data.datahora) : initialState.lastsync;

      dispatch(setLastSync(lastSync));
    });

    return unsubscribe;
  }, []);

  return (
    <TextSmall style={{color: theme.colors.ts}}>
      Última sincronização:{'\n'}
      {lastsync}
    </TextSmall>
  );
};
