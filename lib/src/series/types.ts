/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  ICustomSeriesPaneView,
  ISeriesApi,
  SeriesDataItemTypeMap,
  SeriesMarker,
  SeriesPartialOptionsMap,
  Time,
} from "lightweight-charts";
import { ReactNode } from "react";

export type SeriesType = keyof SeriesDataItemTypeMap;

type CustomSeriesParameters = {
  plugin: ICustomSeriesPaneView;
  data: any[];
  options?: SeriesOptions<"Custom"> & { [key: string]: any };
  reactive?: boolean;
  markers?: SeriesMarker<Time>[];
};

type DefaultSeriesParameters<T extends SeriesType> = {
  data: SeriesDataItemTypeMap[T][];
  markers?: SeriesMarker<Time>[];
  reactive?: boolean;
  options?: SeriesOptions<T>;
};

export type SeriesParameters<T extends SeriesType> = T extends "Custom"
  ? CustomSeriesParameters
  : DefaultSeriesParameters<T>;

export type SeriesTemplateProps<T extends SeriesType> = {
  type: T;
  children?: ReactNode;
  plugin?: ICustomSeriesPaneView;
} & SeriesParameters<T>;

export type SeriesApiRef<T extends SeriesType> = {
  _series: ISeriesApi<T> | null;
  api: () => ISeriesApi<T> | null;
  clear: () => void;
  destroyed: boolean;
};

export type SeriesOptions<T extends SeriesType> =
  SeriesPartialOptionsMap[T];

export type SeriesProps<T extends SeriesType> = Omit<
  SeriesTemplateProps<T>,
  "type"
>;
