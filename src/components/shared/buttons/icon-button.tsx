import { Button, ButtonProps } from '@/components/ui/button';

type UIIconButtonProps = {
  icon: React.ReactNode;
} & ButtonProps;
export default function UIIconButton({
  icon,
  variant = 'outline',
  size = 'icon',
  ...rest
}: UIIconButtonProps) {
  return (
    <Button variant={variant} size={size} {...rest}>
      {icon}
    </Button>
  );
}
