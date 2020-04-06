import styled from 'styled-components'

type ButtonProps = {
  selected?: boolean
}

const Button = styled.button<ButtonProps>(props => ({
  borderRadius: '4px',
  backgroundColor: props.selected ? '#009688' : '#FFF',
  borderColor: '#009688',
  borderStyle: 'solid',
  color: props.selected ? '#FFF' : '#009688',
  padding: '12px',
  margin: '24px',
  display: 'flex',
  alignItems: 'center',
  minWidth: '128px',
  justifyContent: 'center',
  fontSize: 16,
  fontWeight: 500,
  cursor: 'pointer'
}))

export default Button
