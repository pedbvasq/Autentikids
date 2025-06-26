"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner"; // O usa el sistema de notificación que prefieras

const formSchema = z.object({
  from_name: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  from_email: z.string().email(),
  from_subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from_name: "",
      lastName: "",
      from_email: "",
      from_subject: "Web Development",
      message: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (values: z.infer<typeof formSchema>) => {
    try {
      const result = await emailjs.sendForm(
        "service_28qc278",
        "template_ltzcg64",
        formRef.current!,
        "APrBxW31ozdQ8PPWL"
      );
      toast.success("Mensaje enviado con éxito.");
      console.log("mensaje eviador")
      form.reset();
    } catch (error) {
      console.log(error)
      console.error("EmailJS error", error);
      toast.error("Error al enviar el mensaje.");
    }
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de contacto */}
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contacto
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">Conéctate con nosotros</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Agenda una consulta o pregunta por nuestros servicios. ¡Estamos aquí para ayudarte!
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 />
                <div className="font-bold">Dirección</div>
              </div>
              <div>742 Evergreen Terrace, Springfield, IL 62704</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Llámanos</div>
              </div>
              <div>+1 (619) 123-4567</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">Correo</div>
              </div>
              <div>leomirandadev@gmail.com</div>
            </div>

            <div>
              <div className="flex gap-2">
                <Clock />
                <div className="font-bold">Horario</div>
              </div>
              <div>
                <div>Lunes - Viernes</div>
                <div>8AM - 4PM</div>
              </div>
            </div>
          </div>
            {/* Mapa de Google */}
  <div className="w-full h-[200px] rounded overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8475076791036!2d-89.65014878462268!3d39.78172157944444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887524b3c618f39d%3A0xe5532c378e8c4c7f!2s742%20Evergreen%20Terrace%2C%20Springfield%2C%20IL%2062704%2C%20EE.%20UU.!5e0!3m2!1ses!2sec!4v1719433038242!5m2!1ses!2sec"
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full border-0"
    ></iframe>
  </div>
        </div>

        {/* Formulario */}
        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(sendEmail)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="from_name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} name="from_name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} name="lastName" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="from_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" name="from_email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="from_subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Web Development">Web Development</SelectItem>
                          <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                          <SelectItem value="Figma Design">Figma Design</SelectItem>
                          <SelectItem value="REST API">REST API</SelectItem>
                          <SelectItem value="FullStack Project">FullStack Project</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={5} name="message" className="resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="mt-4">
                  Send message
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
