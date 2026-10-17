import { type ComponentType } from 'react';
import { Platform } from 'react-native';
import { requireNativeViewManager } from 'expo-modules-core';

import { useTextos } from '@/i18n/IdiomaContext';

type FamilyActivityPickerViewProps = {
  headerText?: string;
  style?: object;
};

const NativeView: ComponentType<FamilyActivityPickerViewProps> | null =
  Platform.OS === 'ios'
    ? requireNativeViewManager<FamilyActivityPickerViewProps>(
        'AceleralockBlocker',
        'FamilyActivityPickerExpoView'
      )
    : null;

export function FamilyActivityPickerView(props: FamilyActivityPickerViewProps) {
  const t = useTextos();
  if (!NativeView) {
    return null;
  }
  return <NativeView headerText={t.comum.cabecalhoSeletorDeApps} {...props} />;
}
