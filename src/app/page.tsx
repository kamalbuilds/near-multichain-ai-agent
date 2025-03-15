"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bitcoin, Bot, Wallet, Repeat, BarChart, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
//@ts-ignore
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <section className="px-4 pt-16 pb-24 md:pt-24 md:pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Near Multichain <span className="text-orange-600 font-extrabold">AI Agent</span>
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            An AI agent that uses NEAR chain signatures to interact with Bitcoin
            L1 and trade Runes seamlessly.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://wallet.bitte.ai/smart-actions?mode=debug&agentId=3001",
                    "_blank"
                  )
                }
                className="bg-orange-600 hover:bg-orange-700 text-xl font-bold shadow-lg"
              >
                Launch Agent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-24 border-t border-gray-100 bg-orange-50">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Key Features
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3 px-8"
        >
          <motion.div variants={item}>
            <Card className="border-orange-100 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-6">
                  <Wallet className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">NEAR Integration</h3>
                <p className="text-gray-600">
                  Create and sign Bitcoin transactions using one NEAR account, no need for multiple wallets.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card className="border-orange-100 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-6">
                  <Bitcoin className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Create BTC Transaction</h3>
                <p className="text-gray-600">
                  Generate BTC transaction with this agent and send it to Bitcoin
                  testnet, all signed with your NEAR wallet.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card className="border-orange-100 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-6">
                  <Bot className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bitte AI Agent</h3>
                <p className="text-gray-600">
                  An AI agent running on NEAR mainnet powered by Bitte.ai runtime.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* New Runes Section */}
      <section className="px-4 py-16 md:py-24 border-t border-gray-100 bg-gradient-to-br from-white to-orange-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-gray-900">Trade Runes on Bitcoin</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use your NEAR wallet to seamlessly trade and manage Bitcoin Runes without the complexity of managing multiple wallets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-orange-100"
            >
              <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-6">
                <Repeat className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Multichain Trading</h3>
              <p className="text-gray-600">
                Sign and execute transactions across multiple chains using just your NEAR wallet. No need to switch between different wallets or manage multiple private keys.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-orange-100"
            >
              <div className="rounded-full bg-orange-100 w-12 h-12 flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Runes Analytics</h3>
              <p className="text-gray-600">
                Monitor and analyze your Runes portfolio with real-time market data. Make informed trading decisions with AI-powered insights.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Additional Benefits Section */}
      <section className="px-4 py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-orange-600 text-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Why Use Bitcoin Agent?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <Zap className="h-5 w-5 text-orange-200" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Simplified Workflow</h3>
                  <p className="text-orange-100">Manage all your Bitcoin operations through one familiar interface.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <Zap className="h-5 w-5 text-orange-200" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Enhanced Security</h3>
                  <p className="text-orange-100">Leverage NEAR's robust security for all your Bitcoin transactions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <Zap className="h-5 w-5 text-orange-200" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">AI-Powered</h3>
                  <p className="text-orange-100">Let the agent handle complex operations with intelligent assistance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <Zap className="h-5 w-5 text-orange-200" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Future-Ready</h3>
                  <p className="text-orange-100">Stay ahead with cutting-edge multichain technology.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-10 md:py-20 border-t border-gray-100 bg-gradient-to-r from-orange-50 to-orange-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join the future of multichain trading and unlock the full potential of 
            Bitcoin Runes with just your NEAR wallet.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://wallet.bitte.ai/smart-actions?mode=debug&agentId=bitcoin-bitte-agent.vercel.app",
                  "_blank"
                )
              }
              className="bg-orange-600 hover:bg-orange-700 shadow-lg"
            >
              Launch Agent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-gray-100 py-6 bg-gray-50">
        <div className="px-4 text-center text-gray-600">
          <a href="https://x.com/kamalbuilds/" target="_blank" rel="noreferrer" className="hover:text-orange-600 transition-colors">
            <p> © By Kamal</p>
          </a>
        </div>
      </footer>
    </div>
  );
}
