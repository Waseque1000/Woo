import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">EOO</span>
              </div>
              <span>EOO</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Experience the future of e-commerce with our premium selection of curated products designed for the modern individual.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white rounded-full border border-border hover:bg-black hover:text-white transition-all shadow-premium">
                <Globe size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white rounded-full border border-border hover:bg-black hover:text-white transition-all shadow-premium">
                <Mail size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white rounded-full border border-border hover:bg-black hover:text-white transition-all shadow-premium">
                <Phone size={18} />
              </Link>
              <Link href="#" className="p-2 bg-white rounded-full border border-border hover:bg-black hover:text-white transition-all shadow-premium">
                <MapPin size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/shop" className="hover:text-black transition-colors">All Products</Link></li>
              <li><Link href="/collections" className="hover:text-black transition-colors">Collections</Link></li>
              <li><Link href="/shop?filter=new" className="hover:text-black transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop?filter=sale" className="hover:text-black transition-colors">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/faq" className="hover:text-black transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-black transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
              <li><Link href="/tracking" className="hover:text-black transition-colors">Order Tracking</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white border border-border px-4 py-3 rounded-xl text-sm focus:border-black transition-colors shadow-premium"
              />
              <button className="bg-black text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-black/90 transition-all active:scale-[0.98]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground">
            © 2026 EOO WooCommerce. All rights reserved. Built with Next.js.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-black transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
