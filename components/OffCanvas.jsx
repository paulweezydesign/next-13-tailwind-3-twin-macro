import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import tw from 'twin.macro'

import Button from './Button'


import { Subtitle } from './Headings'



const offCanvasVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}

const offCanvasDialogVariants = {
    hidden: {
        opacity: 0,
        x: '-100%',
    },
    visible: {
        opacity: 1,
        x: 0,
    },
}

const OffCanvas = ({ trigger, title, description,
    children, open, setOpen }) => {

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
            <AnimatePresence>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild forceMount>
                            <motion.div
                                variants={offCanvasVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                css={tw`overflow-auto fixed inset-0 bg-blackA-11 z-50 backdrop-blur-sm`}
                            >
                                <Dialog.Content
                                    onCloseAutoFocus={e => e.preventDefault()}
                                    asChild
                                    forceMount
                                >
                                    <motion.div
                                        variants={offCanvasDialogVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        css={tw`overflow-auto bg-slate-1 rounded-tr-2xl shadow-lg z-20 relative top-0 left-0 h-full w-full md:max-w-xs`}
                                        transition={{ x: { stiffness: 1000 } }}
                                    >
                                        <header
                                            css={tw`bg-slate-2 border-b border-b-slate-7 p-8 rounded-t-lg`}
                                        >
                                            <Dialog.Title asChild>
                                                <Subtitle>{title}</Subtitle>
                                            </Dialog.Title>
                                            {description && (
                                                <Dialog.Description asChild>
                                                    {description}
                                                </Dialog.Description>
                                            )}
                                        </header>

                                        <main css={tw`p-8`}>{children}</main>
                                        <div css={tw`absolute right-4 top-4`}>
                                            <Dialog.Close asChild>
                                                <Button
                                                    circular
                                                    iconStandalone={<CloseSvg />}
                                                    variation="hover"
                                                />
                                            </Dialog.Close>
                                        </div>
                                    </motion.div>
                                </Dialog.Content>
                            </motion.div>
                        </Dialog.Overlay>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    )
}

export default OffCanvas
