import { ChangeEvent, ReactNode } from 'react';

export interface IComponentProps {
  children: ReactNode;
}

export interface ISearchContextProps extends IComponentProps {
  value: {
    input: string;
  };
}

export interface IInputEventProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}
