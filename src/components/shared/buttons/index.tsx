import { Button, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

type UIButtonProps = {
  text: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
} & ButtonProps;
export default function UIButton({
  text,
  icon,
  iconPosition = 'left',
  type = 'button',
  loading = false,
  ...rest
}: UIButtonProps) {
  return (
    <Button type={type} {...rest}>
      {loading ? <Loader2 className="animate-spin" /> : null}
      {iconPosition === 'left' && icon}
      {text}
      {iconPosition === 'right' && icon}
    </Button>
  );
}
