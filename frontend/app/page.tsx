import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Shield, Users, Zap } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  SUCL: Social-based Under-collaterized Loans
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revolutionizing DeFi lending with social-based credit assessment and under-collateralized loans.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="w-10 h-10 mb-2" />
                  <CardTitle>Social-Based Credit Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Uses on-chain social behavior and account metrics as a form of credit scoring.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-10 h-10 mb-2" />
                  <CardTitle>Under-Collateralized Lending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Borrowers can access loans without having to lock excessive collateral.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="w-10 h-10 mb-2" />
                  <CardTitle>Zero-Knowledge Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ensures user privacy with ZKPs while enabling transparent verification.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>1. Proving Creditworthiness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Borrowers submit proofs of their account age or transaction history using Brevis-powered ZK proofs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Loan Request and Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>The borrower's verified proofs are submitted to the SUCL smart contract, which determines eligibility for under-collateralized loans.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3. Loan Disbursal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Once the proof is verified, the smart contract facilitates the loan, automating the process without traditional financial intermediaries.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>4. Monitoring and Repayment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>The system monitors repayment behavior and adjusts the borrower's future lending eligibility based on performance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join SUCL today and experience the future of decentralized lending.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Launch App</Button>
                <Button variant="outline">Read Documentation</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 SUCL. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}

function Link({ href, children, ...props }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}