import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2 } from "lucide-react";

interface PartnerModalProps {
  triggerText?: string;
  triggerClassName?: string;
  triggerVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function PartnerModal({ triggerText = "Become Partner", triggerClassName, triggerVariant = "default" }: PartnerModalProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "company",
    notes: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Formbricks API configuration
      // Get these from: https://app.formbricks.com/environments/YOUR_ENV/surveys
      // Instructions: See FORMBRICKS_SETUP.md for setup
      const FORMBRICKS_FORM_ID = "YOUR_FORM_ID";
      const FORMBRICKS_API_KEY = "YOUR_API_KEY";
      const FORMBRICKS_ENVIRONMENT_ID = "YOUR_ENVIRONMENT_ID";
      
      const response = await fetch(
        `https://api.formbricks.com/api/v1/environments/${FORMBRICKS_ENVIRONMENT_ID}/responses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${FORMBRICKS_API_KEY}`,
          },
          body: JSON.stringify({
            surveyId: FORMBRICKS_FORM_ID,
            finished: true,
            data: {
              name: formData.name,
              email: formData.email,
              type: formData.type,
              notes: formData.notes,
            },
          }),
        }
      );

      if (response.ok) {
        setIsLoading(false);
        setIsSubmitted(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an issue submitting the form. Please try again.");
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setOpen(false);
    setFormData({ name: "", email: "", type: "company", notes: "" });
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} className={triggerClassName} data-testid="button-become-partner">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#111] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Become a Partner</DialogTitle>
          <DialogDescription className="text-white/60">
            Fill out the form below and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="text-xl font-bold text-white">Thank you!</h3>
            <p className="text-white/60">Your inquiry has been received. We'll be in touch shortly.</p>
            <Button onClick={resetForm} className="mt-4 w-full bg-[#1A91FF] hover:bg-[#1570C9]">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white">Name</Label>
              <Input 
                id="name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white/5 border-white/10 text-white focus:border-[#1A91FF]" 
                placeholder="John Doe"
                data-testid="input-name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white/5 border-white/10 text-white focus:border-[#1A91FF]" 
                placeholder="john@company.com"
                data-testid="input-email"
              />
            </div>
            
            <div className="grid gap-2">
              <Label className="text-white mb-1">I am representing</Label>
              <RadioGroup 
                value={formData.type} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="company" id="r1" className="border-white/40 text-[#1A91FF]" />
                  <Label htmlFor="r1" className="text-white/80 cursor-pointer">Company</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="individual" id="r2" className="border-white/40 text-[#1A91FF]" />
                  <Label htmlFor="r2" className="text-white/80 cursor-pointer">Individual</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="notes" className="text-white">Notes / Questions</Label>
              <Textarea 
                id="notes" 
                value={formData.notes}
                onChange={handleInputChange}
                className="bg-white/5 border-white/10 text-white focus:border-[#1A91FF] min-h-[100px]" 
                placeholder="Tell us about your needs..."
                data-testid="textarea-notes"
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-[#1A91FF] hover:bg-[#1570C9] text-white font-bold" data-testid="button-submit-form">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Sending..." : "Submit Request"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
