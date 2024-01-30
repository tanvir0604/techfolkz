import LoginForm from '@/components/login-form';
 
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-xl flex-col md:-mt-64 border rounded-lg">
        <LoginForm />
      </div>
    </div>
  );
}