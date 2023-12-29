type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-4 md:px-5 flex flex-col min-h-full">{children}</div>
}

export default Container
