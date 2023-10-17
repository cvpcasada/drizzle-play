/**
 * A helper function to create a React server component in a type safe manner.
 */
export function rsc<P>(fn: (props: P) => React.ReactNode | Promise<React.ReactNode>): React.FC<P> {
  return fn as any
}