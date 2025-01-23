import { LoginForm } from '@/components/pages/login/login-form';
import { UIModeToggle } from '@/components/shared/buttons/mode-toggle';
import { GalleryVerticalEnd } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-between items-center">
          <div className="md:hidden" />
          <a href="#" className="flex items-center gap-2 font-medium flex-1">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Test Inc.
          </a>
          <UIModeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block"></div>
    </div>
  );
}
