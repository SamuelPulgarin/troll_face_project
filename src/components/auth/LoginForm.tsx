import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="flex items-center justify-center h-screen w-screen">
                <Card className="w-[350px] backdrop-blur-lg border-none shadow-lg max-w-md bg-transparent">
                    <CardHeader>
                        <CardTitle>Sign in</CardTitle>
                        <CardDescription className="text-white">Enter your credentials to access</CardDescription>
                    </CardHeader>
                    <form onSubmit={() => { navigate('/home') }}>
                        <CardContent>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        className="focus:outline-white focus:border-none placeholder:text-white"
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        className="focus:outline-white focus:border-none placeholder:text-white"
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </>
    )
}
