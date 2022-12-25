/**
 * The code is originally from `https://github.com/ohansemmanuel/polymorphic-react-component`.
 */
import React from "react";

/* ------------------------------
 * Utility types
 * ------------------------------*/
export type PropsKeys<Element extends React.ElementType, Props> = keyof (AsProp<Element> & Props);

export interface AsProp<Element extends React.ElementType> {
  as?: Element;
}

export type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;

export type PolymorphicRef<Element extends React.ElementType> = React.ComponentPropsWithRef<Element>["ref"];

/* ------------------------------
 * Polymorphic component types
 * ------------------------------*/
/**
 * A type for a polymorphic component.
 */
export type PolymorphicComponentProp<
  Element extends React.ElementType,
  Props = {},
> =
  & React.PropsWithChildren<Props & AsProp<Element>>
  & Omit<React.ComponentPropsWithoutRef<Element>, PropsKeys<Element, Props>>;

/**
 * `PolymorphicComponentProp` with ref.
 */
export type PolymorphicComponentPropWithRef<
  Element extends React.ElementType,
  Props = {},
> = PolymorphicComponentProp<Element, Props> & { ref?: PolymorphicRef<Element> };
