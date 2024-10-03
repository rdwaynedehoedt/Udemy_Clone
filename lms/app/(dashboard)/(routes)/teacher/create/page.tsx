"use client";

import * as z from "zod";
import axios from "axios";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { useRouter} from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
  
import {    
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage 
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    title: z.string ().min(1,{message:"Title is required"}),
})

const CreatePage = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            title:""
        },
    })

    const {isSubmitting,  isValid } = form. formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            const response = await axios.post("/api/course" , values)
            router.push('/teacher/courses/${respose.data.id}');
        } catch {
            toast.error("Something went wrong!"); // This will now work
        }
    }


    return ( 
        <div className="max-w-5xl mx-auto flex md:items-center items-center justify-center md:justify-centerh h-full p-6">
            <div className="text-2xl">
                 <h1>
                     Name your course
                 </h1>
                 <p className="text-sm text-slate-600">
                    What would you like to name your course? Don't worry you can change this latter.
                 </p>
                 <Form {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit )} className="space-y-8 mt-8">
                          <FormField 
                            control={form.control}
                            name="title"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Course Title  
                                    </FormLabel>
                                    <FormControl>
                                            <Input 
                                                disabled={isSubmitting}
                                                placeholder="e.g.'Advance web development'"
                                                {...field}
                                             />
                                        </FormControl>
                                    <FormDescription>
                                            What you will teach in this course?
                                        </FormDescription>
                                        <FormMessage />
                                </FormItem>
                            )}
                          />
                          <div className="flex item-center gap-x-2">
                            <Link href="/teacher/courses">
                            <Button type="button"  variant="ghost">
                                Cancel
                            </Button>
                            </Link>
                            <Button type="submit" disabled={!isValid || isSubmitting}>
                                Continue
                            </Button>
                          </div>
                     </form>
                 </Form>
            </div>
        </div>
     );
}
 
export default CreatePage;